import React from 'react';

const Addproduct = () => {
  return (
    <div style={{ backgroundColor: '#333', minHeight: '110vh', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '150px' }}>
     
      <div style={{ backgroundColor: '#f0f0f0', height: '600px', width: '400px', border: '2px solid #fff', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <div>
        <h1  className="bg-gradient-to-r from-black to-purple-600 text-transparent bg-clip-text mix-blend-mode-difference"style={{fontFamily:'Gills Sans',fontWeight:'bolder',fontSize:'40px'}}>Add Product</h1>
      </div>
        <input type="text"  placeholder='Name' style={{ width: '80%', marginTop: '20px', border: '2px solid #ccc', borderRadius: '5px', padding: '10px', textAlign: 'center',fontFamily:'Gills Sans',fontWeight:'bolder',color:'white' }} />
        <div style={{border: '2px solid #ccc', borderRadius: '5px',width: '80%', marginTop: '20px', padding: '10px',backgroundColor:'black'}}>
        <input type="file"  placeholder='File' style={{ textAlign: 'center' ,color:'white',fontFamily:'Gills Sans',fontWeight:'bolder'}} />
        </div>
        <input type="text" placeholder='Price' style={{ width: '80%', marginTop: '20px', border: '2px solid #ccc', borderRadius: '5px', padding: '10px', textAlign: 'center',fontFamily:'Gills Sans',fontWeight:'bolder' }} />
        <textarea placeholder='Description' style={{ width: '80%', marginTop: '20px', border: '2px solid #ccc', borderRadius: '5px', padding: '10px', textAlign: 'center', backgroundColor:'black',fontFamily:'Gills Sans',fontWeight:'bolder' }} />
       
        <div style={{ width: '80%', marginTop: '20px', border: '2px solid #ccc', borderRadius: '5px', padding: '10px', textAlign: 'center', backgroundColor:'black' }}>
        <select id="origin" placeholder='Origin' style={{fontFamily:'Gills Sans',fontWeight:'bolder'}}>
          <option value="origin" style={{color:'white'}}>Origin</option>
          <option value="domestic">Domestic</option>
          <option value="international">International</option>
        </select>
        </div>
        <div style={{ width: '80%', marginTop: '20px', border: '2px solid #ccc', borderRadius: '5px', padding: '10px', textAlign: 'center', backgroundColor: 'black' }}>
        <select id="type" placeholder='Type' style={{fontFamily:'Gills Sans',fontWeight:'bolder'}} >
          <option value="type">Type</option>
          <option value="antique">Antique</option>
          <option value="general">General</option>
        </select>
        </div>
        <button className="bg-red-500 text-white font-bold py-2 px-4 rounded-full mt-8" style={{ width: '50%', marginTop: '20px', backgroundColor: '#ff4d4f', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Add Product
        </button>
      </div>
    </div>
  );
}

export default Addproduct;
