import PushNotificationIOS from "@react-native-community/push-notification-ios";
import { UPDATE_QUIZ_STATUS } from "./store/reduxHelper";

export const notifyUser = (props) => {
  const state = props.getState();
  const { isCompleted, updatedDate } = state.flashCards.quizNotify;
  const todayDate = new Date().getDate();
  const scheduleLocalNotification = (notifyTime) => {
    PushNotificationIOS.requestPermissions();
    PushNotificationIOS.scheduleLocalNotification({
      alertBody: "Complete atleast one quiz for the day.",
      fireDate: notifyTime,
    });
  };
  if (!isCompleted && updatedDate.getDate() !== todayDate) {
    scheduleLocalNotification(new Date().toISOString());
    props.dispatch({
      type: UPDATE_QUIZ_STATUS,
      payload: { isCompleted: false, updatedDate: new Date() },
    });
  }
};
