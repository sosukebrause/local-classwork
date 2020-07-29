const fs = require("fs");
const util = require("util");
const { v4: uuidv4 } = require("uuid");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
  read() {
    return readFileAsync("db/db.json", "utf-8");
  }
  write(note) {
    return writeFileAsync("db/db.json", JSON.stringify(note));
  }
  getNotes() {
    return this.read().then((notes) => {
      let parsedNotes = [].concat(JSON.parse(notes));
      // let parsedNotes = JSON.parse(notes);
      return parsedNotes;
    });
  }

  createNote(entry) {
    const { title, text } = entry;
    console.log(entry);

    if (!title || !text) {
      throw new Error("Fields cannot be blank");
    }
    const newNote = { entry };

    return this.getNotes()

      .then((notes) => {
        newNote.id = notes.length + 1;
        console.log(newNote);

        [...notes, entry];
      })
      .then((updatedNotes) => this.write(updatedNotes))
      .then(() => newNote);

    // return this.getNotes()
    //   .then((notes) => {
    // newNote.id = notes.length + 1;
    //     console.log(entry);

    //     [...notes, newNote];
    //   })
    //   .then((updatedNotes) => this.write(updatedNotes))
    //   .then((updated) => req.body(updated));
  }
  // Add a unique id to the note using uuid package

  // Get all notes, add the new note, write all the updated notes, return the newNote

  //   createNote(entry) {
  //     console.log("hit store");

  //     const { title, text } = entry;
  //     if (!title || !text) {
  //       throw new Error("Fill in both fields");
  //     }
  //     const newNote = { title, text, id: uuidv4() };
  //     return this.getNotes()
  //       .then((notes) => {
  //         [...notes, newNote];
  //       })
  //       .then((updatedNotes) => {
  //         this.write(updatedNotes);
  //       })
  //       .then(() => {
  //         newNote;
  //       });
  //   }
}

// if (!title || !text) {
//   throw new Error("Fields cannot be blank");
// }
// if (title === text) {
//   throw new Error("Fields cannot be the same");
// }
module.exports = new Store();
