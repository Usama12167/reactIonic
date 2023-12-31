import { IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonImg, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { camera, trash, close } from 'ionicons/icons';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Plugins } from '@capacitor/core';
import { useState } from 'react';

const Tab1: React.FC = () => {

  const { Camera } = Plugins;
  const [photo, setPhoto] = useState();
  const takePhoto = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
    });
    setPhoto(image.webPath);
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Take a photo </IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
    <IonFabButton onClick={takePhoto}>
      <IonIcon icon={camera}></IonIcon>
    </IonFabButton>
  </IonFab>
  <IonGrid>
    <IonRow>
      {/* {photo.map((photos, index) => (
        <IonCol size="6" key={photo.filepath}> */}
          <IonImg src={photo} />
        {/* </IonCol> */}
      {/* ))} */}
    </IonRow>
  </IonGrid>
      </IonContent>

    </IonPage>
  );
};

export default Tab1;
