// This file is a layout that will be applied to every screen of the aplication
// Import the Stack component from expo-router, so that our screens can be displayed as stacks
import {Stack} from 'expo-router';

export default function RootLayout() {
    // Stack is any screen that will be displayed
    return(
        <Stack>
            <Stack.Screen name='index' options={{title: 'Exercises'}} />
        </Stack>
    )
}