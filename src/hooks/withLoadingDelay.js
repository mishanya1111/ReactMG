import { /*useState, useEffect, */useContext } from 'react';
import { CardContext } from '../context/сardArrayContext';

function withLoadingDelay(WrappedComponent) {
    return function WithDelayComponent(props) {
        /*
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      return () => clearTimeout(timer);
    }, []);*/
        const { fetchingDate } = useContext(CardContext);
        if (fetchingDate) {
            return (
                <div className="spinBox">
                    <div className="spinner"></div>
                </div>
            );
        }
        return <WrappedComponent {...props} />;
    };
}

export default withLoadingDelay;
