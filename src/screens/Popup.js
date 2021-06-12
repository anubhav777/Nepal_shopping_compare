import React,{useState} from 'react';
import Dialog, {  DialogTitle,
    DialogContent,
    DialogFooter,
    DialogButton,
    SlideAnimation,
    ScaleAnimation, } from 'react-native-popup-dialog';
function Popup(props) {
    const [
        defaultAnimationDialog, setDefaultAnimationDialog
      ] = useState(false);
      const [
        scaleAnimationDialog, setScaleAnimationDialog
      ] = useState(false);
      const [
        slideAnimationDialog, setSlideAnimationDialog
      ] = useState(false);
    return (
        <div>
            
        </div>
    );
}

export default Popup;