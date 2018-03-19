/**
 * Asynchronously loads the component for Result
 */
import Loadable from 'react-loadable';

export default Loadable({
    loader: () => import('./index'),
    loading: () => null,
});
