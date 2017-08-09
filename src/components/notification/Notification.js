/**
 * Alert Component
 * @author yan
 */
import NotificationBox from './NotificationBox';


let defaultDuration = 4.5;
let defaultTop = 24;
let defaultBottom = 24;
let defaultPlacement = 'topRight';
let notificationInstance = {};
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
    break;

    case 'bottomLeft':
    style ={
      left:0,
      top:'auto',
      bottom:defaultBottom,
    };
    break;

    case 'bottomRight':
    style ={
      right:0,
      top:'auto',
      bottom:defaultBottom,
    };
    break;

    default:
    style = {
      right: 0,
      top: defaultTop,
      bottom: 'auto',
    };
  }
  return style;
}


function getNotificationInstance(placement){
  if(notificationInstance[placement]){
    return notificationInstance[placement]
  }
  notificationInstance[placement] = NotificationBox.newInstance({
    placement:placement,
    style:getPlacementStyle(placement),
    getContainer,
  })
  return notificationInstance[placement];
}

const api ={
  open(parms){
    if(!parms.placement){
      parms.placement = defaultPlacement;
    }

    if(parms.duration == undefined){
      parms.duration = defaultDuration;
    }
    getNotificationInstance(parms.placement).addNotice(parms);
  },
  close(key){
    if (notificationInstance[defaultPlacement]) {
      notificationInstance[defaultPlacement].removeNotice(key);
    }
  },
  config(options = {}) {
    if(options.duration !== undefined){
      defaultDuration = options.duration
    }

    if (options.top !== undefined) {
      defaultTop = options.top;
    }

    if (options.bottom !== undefined) {
      defaultBottom = options.bottom;
    }

    if (options.placement !== undefined) {
      defaultPlacement = options.placement;
    }

    if (options.getContainer !== undefined) {
      getContainer = options.getContainer;
    }
  },
  destroy(){
    Object.keys(notificationInstance).forEach(key =>{
      notificationInstance[key].destroy();
      delete notificationInstance[key];
    })
  }
}

export default api;
