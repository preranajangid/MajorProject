# Agri Pest Predictor 🌱🐛

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/preranajangid/MajorProject.git
   cd MajorProject
   ```

2. **Install backend dependencies**
   ```bash
   python -m venv venv
   venv\Scripts\activate  # On Windows
   pip install -r requirements.txt
   ```

3. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   ```

4. **Run the entire app** (from the project root):
   ```bash
   .\run_all.bat
   ```
   This will start both the Flask backend and React frontend in separate terminals.

5. **Open your browser:**
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend API: [http://localhost:5000](http://localhost:5000)

---

## ✨ Features
- Image-based pest prediction using a deep learning model (MobileNetV2)
- User authentication (register/login/logout)
- Beautiful, colorful UI with Material-UI
- Confidence threshold for robust predictions
- Responsive dashboard for uploading and predicting pest images
- Error handling and user feedback

---

## 🛠️ Tech Stack
- **Frontend:** React, Material-UI, Axios, React Router
- **Backend:** Flask, Flask-Login, Flask-SQLAlchemy, Flask-CORS
- **ML Model:** TensorFlow/Keras (MobileNetV2)
- **Database:** SQLite3

---

## 📁 Folder Structure
```
preranaProject/
│
├── app.py                # Flask backend
├── requirements.txt      # Backend dependencies
├── run_all.bat           # Batch file to start both servers
├── class_mapping.json    # Model class mapping
├── best_model.h5         # Trained ML model
├── train_pest_model.py   # Model training script
│
├── frontend/
│   ├── package.json      # Frontend dependencies
│   ├── src/
│   │   ├── App.js
│   │   ├── components/
│   │   │   ├── Header.js
│   │   │   ├── Footer.js
│   │   │   ├── Dashboard.js
│   │   │   ├── Login.js
│   │   │   └── Register.js
│   │   └── contexts/
│   │       └── AuthContext.js
│   └── ...
│
├── dataset/              # Training/validation/testing images
│   ├── training/
│   ├── validation/
│   └── testing/
└── ...
```

---

## ⚙️ Customization
- **Change confidence threshold:** Edit `app.py` (`if confidence < 0.7:`) to adjust model strictness.
- **Change theme/colors:** Edit `frontend/src/App.js` theme section.
- **Add new pest classes:** Add images to the dataset and retrain the model with `train_pest_model.py`.

---

## 📝 Notes
- Make sure your Python and Node.js environments are set up.
- For development, use the provided batch file for easy startup.
- For production, use a proper WSGI server and build the React app.

---

## 👩‍💻 Author & Credits
- Developed by Prerana Jangid and contributors.
- UI inspired by Material-UI and modern dashboard designs.

---

## 🔄 Updates After Cloning
After cloning the repository to another system, you may need to make the following updates:

1. **Environment Setup:**
   - Ensure Python and Node.js are installed on the new system.
   - Create a new virtual environment and install backend dependencies:
     ```bash
     python -m venv venv
     venv\Scripts\activate  # On Windows
     pip install -r requirements.txt
     ```
   - Install frontend dependencies:
     ```bash
     cd frontend
     npm install
     ```

2. **Configuration:**
   - Check and update any environment variables or configuration files if needed.
   - Ensure the database path is correct for the new system.

3. **Run the Application:**
   - Use the provided batch file to start the application:
     ```bash
     .\run_all.bat
     ```

4. **Testing:**
   - Verify that the application runs correctly on the new system.
   - Test the pest prediction functionality to ensure everything is working as expected.

---

Enjoy predicting pests with style! 🌈 
