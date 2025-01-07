 function copyAndRedirect() {

                const instagramAppUrl = "instagram://direct";
                const fallbackUrl = "https://www.instagram.com/direct/inbox/";

                // Open Instagram app
                const start = Date.now();
                window.location.href = instagramAppUrl;

                // Fallback to browser if the app is not installed
                setTimeout(() => {
                    if (Date.now() - start < 2000) {
                        window.location.href = fallbackUrl;
                    }
                }, 1500);
            }