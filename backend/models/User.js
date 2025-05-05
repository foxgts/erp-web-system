const mongoose = require('mongoose');\nconst userSchema = new mongoose.Schema({ username: String, password: String });\nmodule.exports = mongoose.model('User', userSchema);
