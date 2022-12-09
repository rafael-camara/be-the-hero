import { StackScreenProps } from "@react-navigation/stack";
import { IncidentData as IncidentParams } from "../../screens/Incidents";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Incidents: undefined;
  Detail: IncidentParams;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, Screen>;