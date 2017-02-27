import moment from 'moment';
import 'moment/locale/ru';

const initialNotification = {
  data: [
    {
      id: 17,
      title: 'Test test test 17',
      unread: true,
      datetime: new Date(),
    },
    {
      id: 16,
      title: 'Test test test 16',
      unread: true,
      datetime: new Date().setHours((new Date()).getHours() - 2),
    },
    {
      id: 14,
      title: 'Test test test 14',
      unread: true,
      datetime: new Date().setDate((new Date()).getDate() - 1),
    },
    {
      id: 13,
      title: 'Test test test 13',
      unread: false,
      datetime: new Date().setDate((new Date()).getDate() - 3),
    },
    {
      id: 12,
      title: 'Test test test 12',
      unread: false,
      datetime: new Date().setDate((new Date()).getDate() - 8),
    },
    {
      id: 11,
      title: 'Test test test 11',
      unread: false,
      datetime: new Date().setDate((new Date()).getDate() - 31),
    },
    {
      id: 10,
      title: 'Test test test 10',
      unread: false,
      datetime: new Date().setDate((new Date()).getDate() - 160),
    }
  ]
};

export function getNotification(req) {
  let notification = req.session.notification;
  if (!notification) {
    notification = initialNotification.data.sort((item1, item2) => moment(item1.datetime) > moment(item2.datetime));
    req.session.notification = notification;
  }
  return notification;
}

export default function load(req) {
  return new Promise((resolve, reject) => {
    // make async call to database
    setTimeout(() => {
      if (!req) {
        reject('Notification loadNotification.js fails 33% of the time. You were unlucky.');
      } else {
        resolve(getNotification(req));
      }
    }, 1000); // simulate async load.js
  })
}
