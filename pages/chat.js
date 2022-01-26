import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import appConfig from '../config.json'
import {useRouter} from 'next/router';

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

export default function PaginaDoChat() {
    const roteamento = useRouter();

    return (
        <>

            <Box
                styleSheet={{
                    display: 'flex', flexDirection: 'column',alignItems: 'center', justifyContent: 'center',
                    backgroundImage: 'url(https://images.unsplash.com/photo-1511882150382-421056c89033?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80)',
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                }}
            >
                <Box
                    styleSheet={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        flexDirection: {
                            xs: 'column',
                            sm: 'row',
                        },
                        width: '100%', maxWidth: '700px',
                        height: '80%',
                        borderRadius: '5px', padding: '32px', margin: '16px',
                        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                        backgroundColor: appConfig.theme.colors.transparent["box1"],
                    }}
                >
                    <Titulo>Página de chat</Titulo>
                </Box>

                <Button
                styleSheet={{
                    display: 'inline',
                    backgroundColor: '#000'
                }}
                onClick={function (InfosDoEvento) {
                    InfosDoEvento.preventDefault();
                    roteamento.push('../')

                }}
                type='submit'
                label='Voltar'
                buttonColors={{
                    contrastColor: '#fff',
                    mainColor: appConfig.theme.colors.neon["aqua"],
                }}

                variant='secondary'

            />

            </Box>

            

        </>

    )
}

