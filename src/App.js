import "./styles.css";
import { useRef, useState } from "react";

export default function App() {
  const ref = useRef();
  const [gameRunning, setGameRunning] = useState(false);

  const togglePlay = () => {
    if (ref.current.paused) {
      ref.current.play();
      setGameRunning(true);
    } else {
      ref.current.pause();
      setGameRunning(false);
    }
  };

  /* Challenge
  
    Kullanıcının bir video oyununu oynatmasını ve duraklatmasını sağlayacak buton oluşturuyorsunuz. Göreviniz bunu ayarlamak ve aşağıdaki div'e (satır 26) aşağıdaki gibi yerleştirmektir: 
            
        1. Buton, "video-game-button" şeklinde bir className almalıdır
        
        2. Kullanıcı butona tıkladığında, gameRunning durumunun boolean değeri şu anda olduğu değerin tersine ayarlanmalıdır (true'dan false'a veya tam tersi).
            
        3. Eğer gameRunning doğru ise, buton "Pause" kelimesini göstermelidir. Eğer gameRunning değeri false ise, buton "Play" kelimesini göstermelidir. Başka bir deyişle:

          
             ┌─────────────┐     ------------>     ┌─────────────┐            
             │     Play    │         click         │    Pause    │
             └─────────────┘     <------------     └─────────────┘
           gameRunning = false                    gameRunning = true 
           (oyun duraklatıldı)                   (oyun oynanıyor)
             
        4. Bu görevleri doğru bir şekilde tamamlarsanız, butona tıkladığınızda bazı güzel görsel efektlere sahip olmalı ve çalışmamızın arka planı otomatik olarak açık mavi bir arka planla değiştirilmelidir.
*/
  return (
    <div>
      <video
        ref={ref}
        src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
        poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
      />
      {gameRunning ? (
        <button className="video-game-button" onClick={togglePlay}>
          Pause
        </button>
      ) : (
        <button className="video-game-button" onClick={togglePlay}>
          Play
        </button>
      )}
    </div>
  );
}
