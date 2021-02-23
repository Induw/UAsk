# importing speech recognition library
import speech_recognition as sr

# Initializing the recognizer class (to recognize voice speech)
r = sr.Recognizer()

# Reading Microphone as source using pyaudio
# listening to the speech and store in a variable called audio
with sr.Microphone() as source:
    print("Talk ....")
    audio = r.listen(source)
    print("Time over, thanks")
    # recognize_() method will throw a request error if the API is unreachable, exception handling is used here

    try:
        # using google speech recognition api to identify words in the audio
        print("Text: " + r.recognize_google(audio))
    except:
        print("Sorry, I did not get that")
