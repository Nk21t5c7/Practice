from rembg import remove
import sys
import traceback

input_path = sys.argv[1]
output_path = sys.argv[2]

try: 
    print('1')
    with open(input_path, "rb") as i:
        print(input_path)
        with open(output_path, "wb") as o:
            input = i.read()
            output = remove(input)
            o.write(output)
except Exception as e :
    # print(e)
    traceback.print_exc()