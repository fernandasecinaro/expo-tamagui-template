import * as SecureStore from 'expo-secure-store';
import * as React from 'react';
import { Platform } from 'react-native';

import { User } from './types';

type UseStateHook<T> = [[boolean, T | null], (value: T | null) => void];

function useAsyncState<T>(initialValue: [boolean, T | null] = [true, null]): UseStateHook<T> {
  return React.useReducer(
    (state: [boolean, T | null], action: T | null = null): [boolean, T | null] => [false, action],
    initialValue
  ) as UseStateHook<T>;
}

export async function setStorageItemAsync(key: string, value: string | null) {
  if (Platform.OS === 'web') {
    try {
      if (value === null) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, value);
      }
    } catch (e) {
      console.error('Local storage is unavailable:', e);
    }
  } else {
    if (value == null) {
      await SecureStore.deleteItemAsync(key);
    } else {
      await SecureStore.setItemAsync(key, value);
    }
  }
}

export function useStorageState(key: string): UseStateHook<User> {
  const [state, setState] = useAsyncState<User>();

  React.useEffect(() => {
    if (Platform.OS === 'web') {
      try {
        if (typeof localStorage !== 'undefined') {
          const item = localStorage.getItem(key);
          const user = item ? (JSON.parse(item) as User) : null;
          setState(user);
        }
      } catch (e) {
        console.error('Local storage is unavailable:', e);
      }
    } else {
      SecureStore.getItemAsync(key)
        .then((value) => {
          setState(value ? (JSON.parse(value) as User) : null);
        })
        .catch((error) => {
          console.error('Error retrieving the secure storage item:', error);
        });
    }
  }, [key]);

  const setValue = React.useCallback(
    (value: User | null) => {
      const stringValue = value ? JSON.stringify(value) : null;
      setState(value);
      setStorageItemAsync(key, stringValue);
    },
    [key]
  );

  return [state, setValue];
}
