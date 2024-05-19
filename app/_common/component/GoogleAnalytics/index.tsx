import Script from "next/script";

const GoogleAnalytics = () => {

    const analyticsId = `${process.env.GOOGLE_ANALYTICS}`
    
    return (
        <>
            <Script 
                async 
                src = {`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`} 
                crossOrigin = {"anonymous"}
                strategy={"afterInteractive"}
            />

            <Script
                id="gtag-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${analyticsId}');
                    `,
                }}
            />                
        </>
    )
}

export default GoogleAnalytics;