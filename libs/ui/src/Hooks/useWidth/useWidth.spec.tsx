import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useWidth from './useWidth';

describe('useWidth', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useWidth());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
