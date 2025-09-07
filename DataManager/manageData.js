const fs = require('fs');
const path = require('path');
const metadata_file_path = path.join(__dirname, 'metadata.json');

function updateMetaData(media_type, fileName, updateFields) {
	// Read the metadata file
	let data = fs.readFileSync(metadata_file_path, 'utf-8');
	let metadata = JSON.parse(data);

	// Find and update the entry
	let updated = false;
    typeObj = metadata["type"];
	if (typeObj[media_type]) {
		for (let entry of typeObj[media_type]) {
			if (entry.filename === fileName) {
				for(let field in updateFields) {
                    if(entry.hasOwnProperty(field))
                        entry[field] = updateFields[field];
                    else 
                        console.warn(`Field "${field}" does not exist on the file ${entry.filename}`);
                }
				break;
			}
		}
	}

	// Write back to the file
	fs.writeFileSync(metadata_file_path, JSON.stringify(metadata, null, 2), 'utf-8');
}
console.log("Before update:");
updateMetaData("photo", "photo1.jpg", { description: "Updated description", tags: ["newphototag1", "newphototag2"] });
updateMetaData("video", "video1.mp4", { description: "Updated description", tags: ["newvideotag1", "newvideotag2"] });
console.log("After update:");