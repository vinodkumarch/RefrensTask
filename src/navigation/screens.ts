import {NativeStackScreenProps} from '@react-navigation/native-stack';

export enum Screen {
  CHARACTER = 'CHARACTER',
  CHARACTER_DETAILS = 'CHARACTER DETAILS',
}

export type NavStackParams = {
  [Screen.CHARACTER]: undefined;
  [Screen.CHARACTER_DETAILS]: undefined;
};

export type CharacterScreenProps = NativeStackScreenProps<
  NavStackParams,
  Screen.CHARACTER
>;
export type CharacterDetailsScrenProps = NativeStackScreenProps<
  NavStackParams,
  Screen.CHARACTER_DETAILS
>;
