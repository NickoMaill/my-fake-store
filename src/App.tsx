import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./router";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import { registerRootComponent } from "expo";

function App() {
	const isLoadingComplete = useCachedResources();
	const colorScheme = useColorScheme();

	if (!isLoadingComplete) {
		return null;
	} else {
		return (
			<SafeAreaProvider>
				<Navigation colorScheme={colorScheme} />
			</SafeAreaProvider>
		);
	}
}

export default registerRootComponent(App)