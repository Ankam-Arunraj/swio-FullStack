import React, { useState } from 'react';
import  sleeveImg from './sleeveImgg.jpg';

function Home() {

  const [activeSection, setActiveSection] = useState(null);

  const handleSetActiveSection = (section) => {
    setActiveSection(section);
  };


  return (
    <div className="HomeContainer"  >
      <div className="Home-Image">
        <img src={sleeveImg} alt="" />
      </div>
      <h1 style={{ paddingTop: "2%", fontSize: "90px", fontWeight: "2rem" }}>Sleeve 2</h1>
      <h2 style={{ fontSize: "30px", fontWeight: "1rem" }}><b>The ultimate music accessory for your Mac.</b></h2>
      <h3>Sleeve sits on the desktop, displaying and controlling the music you’re</h3>
      <h4>currently playing in <img src="https://replay.software/sleeve/images/AppMusic.png" style={{height:"35px" , width:"35px " , padding:"5px"}} />Apple Music, <img src="https://replay.software/sleeve/images/AppSpotify.png" style={{height:"35px" , width:"35px", padding:"5px"}}/> Spotify, and <img src="https://replay.software/sleeve/images/AppDoppler.png" style={{height:"35px" , width:"35px", padding:"5px"}}/> Doppler.</h4>
      <div>
        <button className="buttons"><i class="fa-brands fa-apple"></i> <b>Mac App Store </b></button>
        <button className="buttons" style={{ marginLeft: "10px" }}> <b>Buy Directly</b> <button style={{ borderRadius: "10px" }}> <b>$5.99</b></button></button>
      </div>
      <div>
        <h1 style={{ fontSize: "60px", fontWeight: "1rem", marginTop: "20px", marginTop:"5%" }}>Themes. Unlimited themes.</h1>
        <h3>Themes in Sleeve make creating and switching between customizations easy. Share your own creations with friends and install as many themes as you like with just a double-click.</h3>
        <div className="image-content" >
          <div className="image-card-content">
            <img src="https://i.pinimg.com/736x/c3/7a/f1/c37af139600de0ed5d5a89543830ea79.jpg" width="200px" height="240px" /><br></br>
            <b>Eternal Sunshine</b><h5> Forgotten Feels</h5><h6>Slow Magic</h6>
          </div>

          <div className="image-card-content">
            <img src="https://i.ytimg.com/vi/zHro3kno7os/sddefault.jpg" width="200px" height="230px"  padding-top="14%" /><br></br><h6>Are You Listening
              How To Be Human
              Chelsea Cutler</h6>
          </div>
          <div className="image-card-content">
            <img src="https://i.ytimg.com/vi/LdlC3XLRiRE/maxresdefault.jpg" width="200px" height="250px" /><h6><b>Creation Comes Alive</b></h6>
            <h6>Petit Biscuit</h6>
          </div>
        </div>


        <div className="textcontent">
          <div className="textcardcontainer">
            <div className="textcard">
              <div>
                <h3><b>Change it up</b></h3>
                <h5> Switch between themes with just a click.</h5>

                <h5>Modify the built-in themes or create your own using Sleeve’s extensive preferences.</h5>
              </div>
              <div>
                <img src="https://replay.software/sleeve/images/ThemeUIDark.png" className="musicimg"></img>
                <img src="https://replay.software/sleeve/images/ThemeUIActiveDark.png" className="musicimg1" ></img>
              </div>
            </div>

          </div>
          <div className="textcardcontainer">
            <div className="textcard">
              <div>
                <h3>
                  <b>Shareable</b> </h3>
                <h5>Export your themes and share them with friends using the handy new Sleeve Theme file format.</h5>

                <h5>Install themes from anywhere with a double-click or a drag and drop.</h5>
              </div>
              <div>
                <img src="https://replay.software/sleeve/images/ThemeExportDark.png" width={"200px"} height={"200px"} ></img>
              </div>
            </div>
          </div>
        </div>
        <div>

        </div>

      </div>
      <div >
        <h1 style={{ fontSize: "80px", fontWeight: "1rem" }}><b>Countless ways to customize.</b></h1>
        <h2>Customization is at the core of the Sleeve experience — choose from any combination of design choices, behaviors and settings to make Sleeve at home on your desktop.</h2>
        <div className="customize-image-section">
          <img src="https://replay.software/sleeve/images/IconArrayHotkeys.png" />
          <img src="https://replay.software/sleeve/images/IconArrayWindow.png" />
          <img src="https://replay.software/sleeve/images/IconArrayInterface.png" />
          <img src="https://replay.software/sleeve/images/IconArrayLayout.png" />
          <img src="https://replay.software/sleeve/images/IconArrayTheme.png" />
          <img src="https://replay.software/sleeve/images/IconArrayTrack.png" />
          <img src="https://replay.software/sleeve/images/IconArrayPosition.png" />
          <img src="https://replay.software/sleeve/images/IconArrayArtwork.png" />
          <img src="https://replay.software/sleeve/images/IconArraySettings.png" />
        </div>
      </div>

      <div onClick={() => handleSetActiveSection('Artwork')} style={{marginTop:"6%"}}>
        <h2 ><button type="button" class="btn btn-dark" style={{fontSize:"40px" , borderRadius:"10px"}}>Artwork</button></h2>
        {/* Artwork section content */}
        {activeSection === 'Artwork' && (
          <div className="scrollableSection">
            {/* Artwork section content */}
            <div className="headingcontainer">
              <div>
                <img src="https://replay.software/sleeve/images/IconArrayArtworkDark.png"></img>
                <h2><b>Artwork</b></h2>
                <h4>Scale artwork all the way up or all the way down. Round the corners or leave them square.</h4><br />
                <h4>Choose shadow and lighting effects to bring your album artwork to life.</h4><br />
                <h4>Or hide it completely.</h4>
              </div>
              <div className="artworkimg">
                <img src="https://replay.software/sleeve/images/Artwork1Dark.jpg" style={{ borderRadius: "30px" }}></img>
                <img src="https://replay.software/sleeve/images/Artwork2Dark.jpg" style={{ borderRadius: "30px" }}></img>
                <img src="https://replay.software/sleeve/images/Artwork3Dark.jpg" style={{ borderRadius: "30px" }}></img>
              </div>
            </div>
          </div>
        )}
      </div>
      <div onClick={() => handleSetActiveSection('Typography')} >
        <h2><button type="button" class="btn btn-dark" style={{fontSize:"40px" , borderRadius:"10px"}}>Typography</button></h2>
        {/* Typography section content */}
        {activeSection === 'Typography' && (
          <div className="scrollableSection">
            {/* Typography section content */}
            <div className="headingcontainer">
              <div>
                <img src="https://replay.software/sleeve/images/IconArrayTrack.png"></img>
                <h2><b>Typography</b></h2>
                <h4>Pick the track info you want to display, and then exactly how to display it.</h4><br />
                <h4>Choose the fonts, weights, sizes, and transparency to use for each line, along with customizing color and shadow.

                </h4>

              </div>
              <div className="artworkimg">
                <img src="https://replay.software/sleeve/images/Typography1Dark.jpg" style={{ borderRadius: "30px" }}></img>
                <img src="https://replay.software/sleeve/images/Typography2Dark.jpg" style={{ borderRadius: "30px" }}></img>

              </div>
            </div>
          </div>
        )}
      </div>
      <div onClick={() => handleSetActiveSection('Interface')}>
        <h2><button type="button" class="btn btn-dark" style={{fontSize:"40px" , borderRadius:"10px"}}>Interface</button></h2>
        {/* Interface section content */}
        {activeSection === 'Interface' && (
          <div className="scrollableSection">
            {/* Interface section content */}
            <div className="headingcontainer">
              <div>
                <img src="https://replay.software/sleeve/images/IconInterface.png"></img>
                <h2><b>Interface</b></h2>
                <h4>Customize the layout, alignment and position to fit your setup.</h4><br />
                <h4>Show and hide playback controls. Add a backdrop layer and customize it.

                </h4>

              </div>
              <div className="artworkimg">
                <img src="https://replay.software/sleeve/images/Interface1Dark.jpg" style={{ borderRadius: "30px" }}></img>
                <img src="https://replay.software/sleeve/images/Interface2Dark.jpg" style={{ borderRadius: "30px" }}></img>

              </div>
            </div>
          </div>
        )}
      </div>


      {/* <div className="headingcontainer">
        <div>
          <img src="https://replay.software/sleeve/images/IconArrayArtworkDark.png"></img>
          <h2><b>Artwork</b></h2>
          <h4>Scale artwork all the way up or all the way down. Round the corners or leave them square.</h4><br />
          <h4>Choose shadow and lighting effects to bring your album artwork to life.</h4><br />
          <h4>Or hide it completely.</h4>
        </div>
        <div className="artworkimg">
          <img src="https://replay.software/sleeve/images/Artwork1Dark.jpg" style={{ borderRadius: "30px" }}></img>
          <img src="https://replay.software/sleeve/images/Artwork2Dark.jpg" style={{ borderRadius: "30px" }}></img>
          <img src="https://replay.software/sleeve/images/Artwork3Dark.jpg" style={{ borderRadius: "30px" }}></img>
        </div>
      </div>
      <div className="headingcontainer">
        <div>
          <img src="https://replay.software/sleeve/images/IconArrayTrack.png"></img>
          <h2><b>Typography</b></h2>
          <h4>Pick the track info you want to display, and then exactly how to display it.</h4><br />
          <h4>Choose the fonts, weights, sizes, and transparency to use for each line, along with customizing color and shadow.

          </h4>

        </div>
        <div className="artworkimg">
          <img src="https://replay.software/sleeve/images/Typography1Dark.jpg" style={{ borderRadius: "30px" }}></img>
          <img src="https://replay.software/sleeve/images/Typography2Dark.jpg" style={{ borderRadius: "30px" }}></img>

        </div>
      </div>
      <div className="headingcontainer">
        <div>
          <img src="https://replay.software/sleeve/images/IconInterface.png"></img>
          <h2><b>Interface</b></h2>
          <h4>Customize the layout, alignment and position to fit your setup.</h4><br />
          <h4>Show and hide playback controls. Add a backdrop layer and customize it.

          </h4>

        </div>
        <div className="artworkimg">
          <img src="https://replay.software/sleeve/images/Interface1Dark.jpg" style={{ borderRadius: "30px" }}></img>
          <img src="https://replay.software/sleeve/images/Interface2Dark.jpg" style={{ borderRadius: "30px" }}></img>

        </div>
      </div> */}
      <div>
        <h1 style={{ fontSize: "90px", fontWeight: "1rem", marginTop: "3%" }}><b>Like, Scrobble.</b></h1>
        <div className="textcontent">
          <div className="textcardcontainer1">
            <div className="textcard1">
              <div>
                <img src="https://replay.software/sleeve/images/IntegrationLastfmDark.png"></img>
              </div>
              <div>
                Sleeve integrates with Last.<br />fm so you never miss a track.<br /> Simply sign in and start scrobbling.
                Last.fm account required
              </div>
            </div>
          </div>
          <div className="textcardcontainer1" style={{ backgroundColor: "lightblue" }}>
            <div className="textcard1">
              <div>
                <img src="https://replay.software/sleeve/images/IntegrationSpotifyDark.png"></img>
              </div>
              <div style={{ color: "black" }}>
                With Sleeve 2 you can now like<br />tracks in Spotify, without ever<br /> having to switch away from Sleeve.
                A free Spotify Developer account is required
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>






  )
}

export default Home