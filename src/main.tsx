import './bootstrap';

import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ConfigProvider, message } from 'antd';
import localeRu from 'antd/locale/ru_RU';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';

import { getApiError } from '@/common/utils';

import App from './App';

import '@/assets/styles/main.scss';

window.addEventListener('vite:preloadError', () => {
  window.location.reload();
});

const showApiError = (error: any) => {
  const data = getApiError(error);

  if (data.validations.length > 0) {
    data.validations.forEach((item: string) => {
      message.error(item);
    });
    return;
  }

  data.message && message.error(data.message);
};

const onQueryError = (error: any, query: any) => {
  if (query.options.meta?.customErrorHandling) return;

  showApiError(error);
};

const onMutationError = (error: any, _variables: any, _context: any, mutation: any) => {
  if (mutation.options.meta?.customErrorHandling) return;

  // both 'ECONNABORTED' and 'ERR_NETWORK' can be due to network issue or disconnecting from server
  if (['ECONNABORTED', 'ERR_NETWORK'].includes(error?.code)) {
    // if user is not online
    if (!navigator.onLine) {
      message.error('Internetga ulanmagansiz!');
      return;
    }

    // if user is online, then the issue is with connecting to server
    message.error("Serverga bog'lanib bo'lmayapti!");
    return;
  }

  showApiError(error);
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false
    }
  },

  mutationCache: new MutationCache({
    onError: onMutationError
  }),
  queryCache: new QueryCache({
    onError: onQueryError
  })
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ErrorBoundary fallback={<div>Something went wrong</div>}>
    <QueryClientProvider client={queryClient}>
      <ConfigProvider locale={localeRu}>
        <App />
      </ConfigProvider>
      <ReactQueryDevtools position="bottom-right" />
    </QueryClientProvider>
  </ErrorBoundary>
);
