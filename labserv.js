import dgram from 'node:dgram'

export let value = ['empty','empty']
export const boostrapServer = async (port) => {
    const server = dgram.createSocket('udp4');
    
    server.on('error', (error)=>{
        console.log("error:",error)
        server.close()

        throw new Error('internal server error')
    })

    server.on('listening', () => {
        const address = server.address();
        console.log(`dgram client listening ${address.address}:${address.port}`);
    });
    
    server.bind( port , ()=> {
         console.log('Ready to get temp values');
    } )
    
        server.on('message', (msg, rinfo) => { 
        let bam = msg.toString().split(/\b(\s)/).filter( e => e.length > 1)
        
                console.log(`{
        канал 1: ${bam[0]},
        канал 2: ${bam[1]},
        данные передатчика: ${rinfo.address}:${rinfo.port}
                }`);
        value = bam
    })

}

