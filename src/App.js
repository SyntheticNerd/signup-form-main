import "./App.css";
import { useState } from "react";
import SignUp from "./components/SignUp";
import { ContentWrapper, PromoBtn } from "./styles/StyledComponents";
import { SuccessModal } from "./styles/StyledComponents";
function App() {
  const [success, setSuccess] = useState("false")
  return (
    <div className='App'>
      <SuccessModal display={success}/>
      <ContentWrapper>
        <section>
          <h1>Learn to code by watching others</h1>
          <p>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </section>
        <section>
          <PromoBtn>
            <b>Try it free 7 days</b> then $20/mo. thereafter
          </PromoBtn>
          <SignUp setSuccess={setSuccess}/>
        </section>
      </ContentWrapper>
    </div>
  );
}

export default App;
