import tensorflow as tf
import os
import h5py
import json

def examine_model():
    try:
        print("Examining H5 model structure...")
        with h5py.File('pest.h5', 'r') as f:
            # Print the top-level groups
            print("\nTop-level groups:", list(f.keys()))
            
            # Examine model weights
            if 'model_weights' in f:
                print("\nModel weights structure:")
                def print_group(name, obj):
                    if isinstance(obj, h5py.Group):
                        print(f"\nGroup: {name}")
                        for key in obj.keys():
                            print(f"  {key}")
                    elif isinstance(obj, h5py.Dataset):
                        print(f"  Dataset: {name}, Shape: {obj.shape}")
                
                f['model_weights'].visititems(print_group)
            
            return True
    except Exception as e:
        print(f"Error examining model: {str(e)}")
        return False

def create_and_save_model():
    try:
        # Create the base MobileNetV2 model
        base_model = tf.keras.applications.MobileNetV2(
            input_shape=(224, 224, 3),
            include_top=False,
            weights='imagenet'
        )
        
        # Create the full model
        model = tf.keras.Sequential([
            base_model,
            tf.keras.layers.GlobalAveragePooling2D(),
            tf.keras.layers.Dropout(0.2),
            tf.keras.layers.Dense(12, activation='softmax')
        ])
        
        # Compile the model
        model.compile(
            optimizer='adam',
            loss='categorical_crossentropy',
            metrics=['accuracy']
        )
        
        # Save the model in SavedModel format
        saved_model_dir = 'saved_model'
        if not os.path.exists(saved_model_dir):
            os.makedirs(saved_model_dir)
        
        print("Saving model in SavedModel format...")
        tf.saved_model.save(model, saved_model_dir)
        
        print(f"Model successfully saved to {saved_model_dir}")
        return True
    except Exception as e:
        print(f"Error during model creation and saving: {str(e)}")
        return False

if __name__ == "__main__":
    examine_model()
    create_and_save_model() 