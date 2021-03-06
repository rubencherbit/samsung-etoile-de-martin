from locust import HttpLocust, TaskSet, task
import string, random, time

# Whether you want to enable the debug features or not ;)
DEBUG = False
# Whether you want to force the request on /GET question/x
FORCE_QUESTION_REFRESH = False
# The length for the mock usernames
USERNAME_LENGTH = 10
# The minimum delay to perform an action, in ms
BETWEEN_REQUEST_MIN_DELAY = 1000
# The maximum delay to perform an action, in ms
BETWEEN_REQUEST_MAX_DELAY = 2500
# The ratio for hitting /setting and posting an answer. The bigger SETTING_RATION is, the more it will be called.
SETTING_RATIO = 5
ANSWER_RATIO = 1
# The API url
API_URL = "https://api.quizzetoile.fr/api"

def generate_name(length):
    return ''.join([random.choice(string.ascii_letters) for _ in range(length)])

class DumbPeopleBehavior(TaskSet):
    current_question = None
    current_question_id = 0
    player_id = 0
    already_answer = False

    def on_start(self):
        if DEBUG: print("On initialise")
        time.sleep(0.1)
        self.register()
        pass

    def on_stop(self):
        if DEBUG: print("On stop")
        pass

    def register(self):
        if DEBUG: print("On se register")
        res_register = self.client.post("/players", {"username": generate_name(USERNAME_LENGTH)})

        if res_register.status_code == 201:
            res_register_json = res_register.json()
            self.player_id = res_register_json["player"]["id"]

    @task(SETTING_RATIO)
    def get_setting_and_question(self):
        if DEBUG: print("On va get sur setting")
        res_setting = self.client.get("/setting")

        if res_setting.status_code == 200:
            res_setting_json = res_setting.json()
            question_id = res_setting_json["question_id"]

            if question_id != self.current_question_id or FORCE_QUESTION_REFRESH:
                if DEBUG: print("On va get la question {}".format(question_id))
                res_question = self.client.get("/questions/{}".format(1 if DEBUG else question_id))

                if res_question.status_code == 200:
                    self.current_question_id = question_id
                    self.already_answer = False
                    res_question_json = res_question.json()
                    self.current_question = res_question_json["data"]

    @task(ANSWER_RATIO)
    def post_question_reponse(self):
        if self.current_question_id and not self.already_answer:
            if DEBUG: print("On a repondre a la question {}".format(self.current_question_id))
            payload = {
                "answer_id": random.choice(self.current_question["answers"])["id"],
                "player_id": self.player_id,
                "question_id": self.current_question_id
            }

            if DEBUG: print("On va repondre avec cette payload", payload)
            self.client.post("/questions/{}/result".format(self.current_question_id), payload)
            self.already_answer = True

class EtoileDeMartinYOLO(HttpLocust):
    host = API_URL
    task_set = DumbPeopleBehavior
    min_wait = BETWEEN_REQUEST_MIN_DELAY
    max_wait = BETWEEN_REQUEST_MAX_DELAY
