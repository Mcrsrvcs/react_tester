export default function UtilText(props) {

  return (
    <>
    <div  className="d-flex">
    <div  className="mb-5 my-3 mx-1 mt-0 pt-0 sidebar d-inline-block d-flex-column rounded-3 flex-shrink-0 p-3 text-dark ">
        <div  className="d-flex-column detail rounded-3 flex-shrink-0 p-3 text-dark " style={{width:"280px"}}>
          <a href="/"  className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <svg  className="bi me-2" width="40" height="32">
              <use  href="#bootstrap" />
            </svg>
            <span  className="fs-4">Details</span>
          </a>
          <hr/>
          <ul  className="nav nav-pills flex-column mb-auto">
            <li  className="nav-item peoples1">
              <a  href="/" title="peoples in this room"  className="nav-link active" aria-current="page">
                Peoples
              </a>
            </li>

            <div  className="peoples">

              <li>
                <a  href="/"  className="nav-link text-dark">
                  <svg  className="bi me-2" width="16" height="16">
                    <use  href="#speedometer2" />
                  </svg>
                  Me
                </a>
              </li><li>
                <a  href="/"  className="nav-link text-dark">
                  <svg  className="bi me-2" width="16" height="16">
                    <use  href="#speedometer2" />
                  </svg>
                  Meeting_Bussness
                </a>
              </li>
            </div>
          </ul>

          <hr/>
          <ul  className="nav nav-pills flex-column mb-auto">
            <li  className="nav-item">
              <a  href="/"  className="nav-link active" title="Room you joined" aria-current="page">
                Rooms
              </a>
            </li>
            <div  className="rooms">
              <li>
                <a  href="/"  className="nav-link text-dark">
                  <svg  className="bi me-2" width="16" height="16">
                    <use  href="#speedometer2" />
                  </svg>
                  Meeting_Bussness
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>

    <section  className="section mt-0 pt-0">
    {/* <div className="container"> */}
            <div className="chat-window">
                <div className="chats">
                    {/* <div className="user-join">
                        <p><b>Jarvis</b> joined the chat</p>
                    </div>
                    <div className=" messagex incoming">
                        <h5>Jarvis</h5>
                        <p>Hello Ultron Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum adipisci ducimus fugiat, quo accusamus laudantium doloremque autem fugit necessitatibus nulla tenetur incidunt dignissimos ex nemo eos voluptate asperiores labore, repellendus maxime quisquam illum! Optio ipsum illo sunt eaque qui mollitia suscipit laboriosam vel. Earum nulla nisi officiis fugit error nemo? Est accusantium soluta voluptas quia accusamus earum quidem eligendi asperiores. Incidunt expedita earum animi tempora sed sint doloremque modi magni deserunt fuga sit nam dolorum, nobis eligendi? Velit, alias? Qui recusandae asperiores excepturi nesciunt, soluta animi eos eveniet consectetur cum error! Numquam nam ea nesciunt quo vero itaque nostrum dolores.</p>
                    </div>
                    <div className=" messagex outgoing">
                        <h5>vironica</h5>
                        <p>Welcome Jarvis</p>
                    </div> */}
                     <div  className="out "><div className="inmess messagex meassageout">inlorem Lorem </div></div>

              <div  className="in d-flex  messagexjustify-content-end">  <div className="inmess  messagex messagein">inlorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Est voluptate eveniet consequatur illo architecto natus reiciendis officia magni officiis voluptatum? Tenetur officia atque nostrum est commodi beatae asperiores cumque illum.</div></div>

              <div className="center    d-flex justify-content-center"><div className="incen messagex">center</div></div>

              <div  className="out   "><div className="inmess   messagex meassageout">inlorem Lorem isicing elit. Est voluptate eveniet consequatur illo architecto natus reiciendis officia magni officiis voluptatum? Tenetur officia atque nostrum e</div></div>

              <div  className="in d-flex justify-content-end"><div className="inmess messagein messagex">error nemo? Est accusantium soluta voluptas quia accusamus earum quidem</div></div>
              <div  className="out  "> <div className="inmess   messagex meassageout">inlorem Lorem </div></div>

              <div  className="in d-flex justify-content-end"><div className="inmess messagein  messagex">inlorem Lorem </div></div>
                </div>

                <div className="user-input">
                    <input type="text" placeholder="Type your  messagex..."/>
                    <button>SEND</button>
                </div>
            </div>
        {/* </div> */}
  </section>

</div>
  </>
  );
}
