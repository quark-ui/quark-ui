/**
 * Alert Component
 * @author yanwei
 */
import NotificationBox from './NotificationBox';

let defaultDuration = 4.5;
let defaultTop = 24;
let defaultBottom = 24;
let defaultPlacement = 'topRight';
let notificationInstance;
let getContainer;

export type notificationPlacement = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';

function getPlacementStyle(placement){
  let style;
  switch(placement){
    case 'topLeft':
    style ={
      left:0,
      top:defaultTop,
      bottom:'auto',
    };
    breack;

    case 'bottomLeft':
    style ={
      left:0,
      top:'auto',
      bottom:defaultTop,
    };
    breack;

    case 'bottomRight':
    style ={
      right:0,
      top:'auto',
      bottom:defaultTop,
    };
    breack;

    default:
    style = {
      right: 0,
      top: defaultTop,
      bottom: 'auto',
    };
  }
  return style;
}


function getNotificationInstance(){
  debugger
  notificationInstance = notificationInstance || NotificationBox.newInstance({
    style:getPlacementStyle(defaultPlacement),
    getContainer,
  })

  return notificationInstance;
}

function noop() {}

export default{
  info(content='',duration = defaultDuration, onClose = noop) {
    getNotificationInstance().notice({type:'info',content,duration,onClose});
  },
  config(options ={}){
    if(options.duration !== undefined){
      defaultDuration = options.duration
    }
    if (options.getContainer !== undefined) {
      getContainer = options.getContainer;
    }
  },
  destroy() {
    if (notificationInstance) {
      notificationInstance.destroy();
      notificationInstance = null;
    }
  },
}