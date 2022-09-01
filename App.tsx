import { SafeAreaProvider } from "react-native-safe-area-context";
<<<<<<< HEAD:App.tsx
import Navigation from "./src/router";
import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
=======
import Navigation from "./router";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import { registerRootComponent } from "expo";
>>>>>>> develop:src/App.tsx

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