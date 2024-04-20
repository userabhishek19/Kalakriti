import React from 'react'

const Addproduct = () => {
  return (
    <div className='' style={{backgroundColor:'black',height:'100vh',width:'100vw',marginTop:'80px',alignItems:'center',border:'1px solid black',marginBottom:'30%'}}>
      <br />
      <div  style={{backgroundColor:'grey',height:'500px',width:'400px',marginLeft:'30%',marginTop:'5%',border:'2px solid white',borderRadius:'5px'}}>
      <div style={{marginTop:'4px',marginBottom:'2px',width:'100%',backgroundColor:'white',position:'relative'}}>
      <input type="text" className="placeholder-black bg-gray-400" placeholder='name' style={{width:'100%',marginTop:'0px',border:'2px solid white',borderRadius:'10px',textAlign:'center','::placeholder': { color: 'white' },position:'absolute',top:'2%' }}/> <br />
      </div>
      <div style={{marginTop:'2px',marginBottom:'2px',width:'100%'}}>
      <input type="file"  className="placeholder-black bg-gray-400" placeholder='file' style={{width:'100%',marginTop:'25px',border:'2px solid white',borderRadius:'10px',textAlign:'center','::placeholder': { color: 'white' } }}/><br />
      </div>
      <div style={{marginTop:'2px',marginBottom:'2px',width:'100%'}}>
      <input type="text"  className="placeholder-black bg-gray-400" placeholder='price' style={{width:'100%',marginTop:'25px',border:'2px solid white',borderRadius:'10px',textAlign:'center','::placeholder': { color: 'white' } }}/> <br />
      </div>
      <div style={{marginTop:'2px',marginBottom:'2px',width:'100%'}}>
      <input type="text" placeholder='description' className="placeholder-black bg-gray-400" style={{width:'100%',marginTop:'25px',border:'2px solid white',borderRadius:'10px',textAlign:'center',lineHeight:'4'}}/> <br />
      </div>
      <div style={{marginTop:'2px',marginBottom:'2px',width:'100%'}}>
      <select id="origin" placeholder='origin' className="placeholder-black bg-gray-400"  style={{width:'100%',marginTop:'25px',border:'2px solid white',borderRadius:'10px',textAlign:'center'}}>
      <option value="origin">Origin</option>
  <option value="domestic">Domestic</option>
  <option value="international">International</option>
</select>
      </div>
     
      <div style={{marginTop:'2px',marginBottom:'2px',width:'100%'}}>
      <select id="type" placeholder='origin'  className="placeholder-black bg-gray-400" style={{width:'100%',marginTop:'25px',border:'2px solid white',borderRadius:'10px',textAlign:'center'}}>
      <option value="type">Type</option>
  <option value="antique">Antique</option>
  <option value="general">General</option>
</select>
<button className="bg-red-500 text-white font-bold py-2 px-4 rounded-full" style={{marginLeft:'30%',marginTop:'10%'}}>
              Add PRODUCT
            </button>
      </div>
      </div>
      
      </div>
 
  )
}

export default Addproduct;
