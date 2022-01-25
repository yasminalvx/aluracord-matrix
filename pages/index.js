import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import appConfig from '../config.json'

function GlobalStyle() {
    return (
        <style global jsx>{`
            * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            list-style: none;
            }
            body {
            font-family: 'Open Sans', sans-serif;
            }
            /* App fit Height */ 
            html, body, #__next {
            min-height: 100vh;
            display: flex;
            flex: 1;
            }
            #__next {
            flex: 1;
            }
            #__next > * {
            flex: 1;
            }
            /* ./App fit Height */ 
        `}</style>
    );
}

function Titulo(props) {
    const Tag = props.tag || 'h1';
    return (
        <>
            <Tag> {props.children} </Tag>
            <style jsx>{`
                ${Tag} {
                    color: ${appConfig.theme.colors.neon["aqua"]};
                    font-size: 24px;
                    font-weight: 600;
                    text-shadow: 0px 0px 6px rgba(4, 197, 209, 0.8);
                }
            `}</style>
        </>
    );
}

// function HomePage() {
//     return (
//         <div>
//             <GlobalStyle/>
//             <Titulo tag="h2">Boas vindas de volta!</Titulo>
//             <h2>Discord - Alura Matrix</h2>
//         </div>
//     )
// }

// export default HomePage

export default function PaginaInicial() {
    const username = 'yasminalvx';

    return (
        <>
            <GlobalStyle />
            <Box
                styleSheet={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    // backgroundColor: appConfig.theme.colors.neon["aqua"],
                    backgroundImage: 'url(https://images.unsplash.com/photo-1511882150382-421056c89033?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80)',
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                }}
            >
                <Box
                    styleSheet={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: {
                            xs: 'column',
                            sm: 'row',
                        },
                        width: '100%', maxWidth: '700px',
                        borderRadius: '5px', padding: '32px', margin: '16px',
                        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                        backgroundColor: appConfig.theme.colors.transparent["box1"],
                    }}
                >
                    {/* Formulário */}
                    <Box
                        as="form"
                        styleSheet={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                            width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
                        }}
                    >
                        <Titulo tag="h2">Boas vindas! Vamos jogar?</Titulo>
                        <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
                            {appConfig.name}
                        </Text>

                        <TextField
                            fullWidth
                            textFieldColors={{
                                neutral: {
                                    textColor: appConfig.theme.colors.neutrals[200],
                                    mainColor: appConfig.theme.colors.neon["aqua"],
                                    mainColorHighlight: appConfig.theme.colors.neon["aqua"],
                                    backgroundColor: 'black',
                                },
                            }}
                        />
                        <Button
                            styleSheet={{
                                backgroundColor: '#000'
                            }}
                            type='submit'
                            label='Entrar'
                            fullWidth
                            buttonColors={{
                                contrastColor: '#fff',
                                mainColor: appConfig.theme.colors.neon["aqua"],
                            }}
                            
                            variant='secondary'

                        />
                    </Box>
                    {/* Formulário */}


                    {/* Photo Area */}
                    <Box
                        styleSheet={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            maxWidth: '200px',
                            padding: '16px',
                            backgroundColor: appConfig.theme.colors.neutrals[900],
                            border: '1px solid',
                            borderColor: appConfig.theme.colors.neon["aqua"],
                            borderRadius: '10px',
                            flex: 1,
                            minHeight: '240px',
                        }}
                    >
                        <Image
                            styleSheet={{
                                borderRadius: '50%',
                                marginBottom: '16px',
                            }}
                            src={`https://github.com/${username}.png`}
                        />
                        <Text
                            variant="body4"
                            styleSheet={{
                                color: appConfig.theme.colors.neutrals[200],
                                backgroundColor: appConfig.theme.colors.neutrals[900],
                                padding: '3px 10px',
                                borderRadius: '1000px'
                            }}
                        >
                            {username}
                        </Text>
                    </Box>
                    {/* Photo Area */}
                </Box>
            </Box>
        </>
    );
}
