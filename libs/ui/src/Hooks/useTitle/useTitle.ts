import { useEffect } from 'react';

export function useTitle(title: string) {
  useEffect(() => {
    if (title) {
      document.title = [title.trim(), process.env['REACT_APP_APP_NAME']]
        .filter((i) => i)
        .join(' | ');
    }
  }, [title]);
}

export default useTitle;
