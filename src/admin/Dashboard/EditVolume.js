import React from 'react'

function EditVolume() {
	return (
		<div className=" w-full">
					<label className="text-center font-bold text-4xl ">Add Volume</label>	
					<hr className="w-full h-4" />
					<form onSubmit={handleSubmit} >
						 <TextInput
		                	id="volume_name"
							labelText="Volume Name"
							name="volume"
							onChange={(e => setVolume(e.target.value))}
							value={volume}
		
		              	/>
			              <div className="mt-6">
		                <span className="block w-full rounded-md shadow-sm">
		                  <Btn type="submit" width="full" 
							>
		                   Add Volume
		                  </Btn>
		                </span>
		              </div>
		
		
		
					</form>
				</div>
	)
}

export default EditVolume