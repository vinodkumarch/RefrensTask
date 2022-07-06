import {NativeStackScreenProps} from '@react-navigation/native-stack';

export enum Screen {
  DASHBOARD = 'DASHBOARD',
  DETAILS = 'DETAILS',
}

export type NavStackParams = {
  [Screen.DASHBOARD]: undefined;
  [Screen.DETAILS]: undefined;
};

export type DashboardScreenProps = NativeStackScreenProps<
  NavStackParams,
  Screen.DASHBOARD
>;
export type DetailsScrenProps = NativeStackScreenProps<
  NavStackParams,
  Screen.DETAILS
>;
