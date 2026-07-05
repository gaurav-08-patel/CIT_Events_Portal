import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <AuthProvider>
                    <App />
                </AuthProvider>
                <Toaster
                    position="top-center"
                    toastOptions={{
                        style: {
                            background: "var(--cit-surface)",
                            color: "var(--cit-text)",
                            border: "1px solid var(--cit-border)",
                            boxShadow: "var(--cit-shadow-md)",
                            borderRadius: "var(--cit-radius-md)",
                            fontSize: "14px",
                            fontWeight: "600",
                            padding: "12px 16px",
                        },
                        success: {
                            iconTheme: {
                                primary: "var(--cit-success)",
                                secondary: "white",
                            },
                        },
                    }}
                />
            </BrowserRouter>
        </QueryClientProvider>
    </StrictMode>,
);
