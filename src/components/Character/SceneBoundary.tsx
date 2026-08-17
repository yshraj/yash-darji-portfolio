import { Component, ErrorInfo, PropsWithChildren, useEffect } from "react";
import { useLoading } from "../../context/LoadingProvider";

/**
 * The character scene builds a WebGLRenderer inside an effect. On a machine with
 * hardware acceleration off — or any browser that hands back a null WebGL
 * context — that throws, and without a boundary React tears down the entire
 * tree and the visitor gets a blank page.
 *
 * Everything except the avatar works fine without WebGL, so on failure we drop
 * the scene and push the loader straight to 100 so it runs its normal exit
 * rather than sitting there until the bail-out timer.
 */

const ReleaseLoader = () => {
  const { setLoading } = useLoading();

  useEffect(() => {
    setLoading(100);
  }, [setLoading]);

  return null;
};

type State = { failed: boolean };

class SceneBoundary extends Component<PropsWithChildren, State> {
  state: State = { failed: false };

  static getDerivedStateFromError(): State {
    return { failed: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("3D scene unavailable, continuing without it", error, info.componentStack);
  }

  render() {
    return this.state.failed ? <ReleaseLoader /> : this.props.children;
  }
}

export default SceneBoundary;
