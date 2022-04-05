import "./App.css";
import SignUp from "./components/SignUp";
import { ContentWrapper, PromoBtn } from "./styles/StyledComponents";

function App() {
  return (
    <div className='App'>
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
          <SignUp />
        </section>
      </ContentWrapper>
    </div>
  );
}

export default App;
