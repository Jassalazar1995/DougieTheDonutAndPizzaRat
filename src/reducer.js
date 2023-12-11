export default function reducer(state, action) {
    switch(action.type){
        case 'MANHATTAN':
            let item = {
                text: action.payload,
                id: crypto.randomUUID()
            }
            let descriptor = action.payload == 'MANHATTAN'
            return 
          
      }
}