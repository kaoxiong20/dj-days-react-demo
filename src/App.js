import './App.css';
import Header from './components/Header';
import AlbumMessage from './components/AlbumMessage';
import AlbumListing from './components/AlbumListing';
import Form from './components/Form';
import SubmitButton from './components/SubmitButton';
import Input from './components/Input';

function App() {
  return (
    <>
    <Header HeaderContent="DJ Days React Demo"/>
    <AlbumMessage MessageContent="You need more albums"/>
    <AlbumListing
        AlbumName="Lemonade"
        AlbumArtist="Beyonce"
        AlbumGenre="RnB"
      />

    <AlbumListing
      AlbumName="DAMN"
     AlbumArtist="Kendrick Lamar"
      AlbumGenre="HipHop"
    />

    <AlbumListing
      AlbumName="All Eyez on Me"
      AlbumArtist="Tupac"
      AlbumGenre="Rap"
    />
  
  <div>
    <Form/>
  </div>
    </>
  );
}

export default App;
