import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { store } from "./store";

// redux

import { Provider } from "react-redux";

export default function App() {
	const isLoadingComplete = useCachedResources();
	// const colorScheme = useColorScheme();

	if (!isLoadingComplete) {
		return null;
	} else {
		return (
			<Provider store={store}>
				<SafeAreaProvider>
					<Navigation
					// colorScheme={colorScheme}
					/>
					<StatusBar translucent backgroundColor='black' />
				</SafeAreaProvider>
			</Provider>
		);
	}
}
