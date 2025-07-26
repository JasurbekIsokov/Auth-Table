import * as Context from '../context';
import * as Types from '../types';

interface IReturn extends Types.IContext.State {}

const useAuth = (): IReturn => {
  const { state } = Context.useContext();

  return state;
};

export default useAuth;
