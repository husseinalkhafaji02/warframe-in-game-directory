#author: Hussein Alkhafaji 
# flask file serving as the backend ofn the directory
from flask import Flask, jsonify, request

app = Flask(__name__)

#some sample data, add some later from warframe repo in github 

items = [
    {"name":"Warframe Blueprint", "Drop_Chance":0.1, "Location": "Planet X"},
    {"name": "Weapon Part", "Drop_Chance": 0.2, "location": "Planet Y"}, 
    ]

@app.route('/items', methods=["GET"])
def get_items():
    return jsonify(items)



@app.route('/items/<string:name>', methods=["GET"])
def get_item(name):
    item = next((item for item in items if item["name"] == name), None)
    if item:
        return jsonify(item)
    return jsonify({"error": "Item not found"}), 404
if __name__ == "__main__":
    app.run(debug=True)