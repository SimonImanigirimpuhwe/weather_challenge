import { Container } from "@chakra-ui/react";


const Layout = ({children, title, description, keywords, ftPos, isEmpty, isSunrise}) => {
    return (
        <div className={`${isSunrise ? "container_sunrise" : "container_sunset"}`}>
            <Container flexDirection={"row"}>
                <head>
                    <title>{title}</title>
                    <meta title="description" content={description} />
                    <meta title="keywords" content={keywords} />
                </head>
                <main>
                    {children}
                </main>
                <footer className={`footer ${ftPos} ${isEmpty && 'isEmpty'}`}>
                    <h4>@Weather &copy; 2022</h4>
                </footer>
            </Container>
        </div>
    )
};

export default Layout;

Layout.defaultProps = {
    title: "WEATHER WEB",
    description: "WEATHER WEB",
    keywords: "WEATHER WEB",
    ftPos: "mt-0",
    isEmpty: true,
  };