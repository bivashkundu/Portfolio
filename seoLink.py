import os
import re

# Root directory containing the JavaScript files
root_directory = '/Users/webskitters/Documents/BivashProject/JAVASCRIPT/next-js-new-structure'

# Check if the root directory exists
if os.path.isdir(root_directory):
    # Walk through the directory and its subdirectories
    for dirpath, _, filenames in os.walk(root_directory):
        for filename in filenames:
            # Process only .js files
            if filename.endswith('.tsx'):
                file_path = os.path.join(dirpath, filename)
                try:
                    # Read the content of the file
                    with open(file_path, 'r') as file:
                        content = file.read()
                    
                    # Prepare the attributes to add
                    attributes = {
                        'rel': 'noreferrer',
                        'aria-label': 'testlabel'
                    }

                    # Function to add attributes if not present
                    def add_attributes(match):
                        link_tag = match.group(0)
                        for key, value in attributes.items():
                            if not re.search(r'{}\s*=\s*"(.*?)"'.format(key), link_tag):
                                link_tag = link_tag.replace('<Link ', '<Link {}="{}" '.format(key, value), 1)
                        return link_tag
                    
                    # Use regex to find all <Link> tags and update them
                    modified_content = re.sub(r'<Link[^>]*>', add_attributes, content)

                    # Write the modified content back to the file if changes were made
                    if modified_content != content:
                        with open(file_path, 'w') as file:
                            file.write(modified_content)
                        print("Updated <Link> attributes in {}.".format(file_path))
                    else:
                        print("No changes made to {}.".format(file_path))
                
                except FileNotFoundError:
                    print("The file {} does not exist.".format(file_path))
                except PermissionError:
                    print("Permission denied for file {}.".format(file_path))
                except Exception as e:
                    print("An error occurred with file {}: {}".format(file_path, e))
else:
    print("Root directory does not exist.")
