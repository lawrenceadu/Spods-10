import { act, renderHook } from '@testing-library/react';

import useTitle from './useTitle';

describe('useTitle', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useTitle());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
