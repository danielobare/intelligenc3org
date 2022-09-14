require "application_system_test_case"

class SecuritiesTest < ApplicationSystemTestCase
  setup do
    @security = securities(:one)
  end

  test "visiting the index" do
    visit securities_url
    assert_selector "h1", text: "Securities"
  end

  test "should create security" do
    visit securities_url
    click_on "New security"

    fill_in "Casulaties", with: @security.casulaties
    fill_in "Country", with: @security.country
    fill_in "Description", with: @security.description
    fill_in "Place", with: @security.place
    click_on "Create Security"

    assert_text "Security was successfully created"
    click_on "Back"
  end

  test "should update Security" do
    visit security_url(@security)
    click_on "Edit this security", match: :first

    fill_in "Casulaties", with: @security.casulaties
    fill_in "Country", with: @security.country
    fill_in "Description", with: @security.description
    fill_in "Place", with: @security.place
    click_on "Update Security"

    assert_text "Security was successfully updated"
    click_on "Back"
  end

  test "should destroy Security" do
    visit security_url(@security)
    click_on "Destroy this security", match: :first

    assert_text "Security was successfully destroyed"
  end
end
