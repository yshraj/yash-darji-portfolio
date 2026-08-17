import { lazy, Suspense } from "react";
import { LoadingProvider } from "./context/LoadingProvider";
import SceneBoundary from "./components/Character/SceneBoundary";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));

const App = () => {
  return (
    <LoadingProvider>
      <Suspense>
        <MainContainer>
          <SceneBoundary>
            <Suspense>
              <CharacterModel />
            </Suspense>
          </SceneBoundary>
        </MainContainer>
      </Suspense>
    </LoadingProvider>
  );
};

export default App;
