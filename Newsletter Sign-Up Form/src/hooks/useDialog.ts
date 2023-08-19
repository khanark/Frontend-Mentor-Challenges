import { useCallback, useState } from 'react';

export function useDialog() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openDialog = useCallback(() => setIsOpen(() => true), []);
  const closeDialog = useCallback(() => setIsOpen(() => false), []);

  return {
    isOpen,
    openDialog,
    closeDialog,
  };
}
