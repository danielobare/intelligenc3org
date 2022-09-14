require "test_helper"

class SecuritiesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @security = securities(:one)
  end

  test "should get index" do
    get securities_url
    assert_response :success
  end

  test "should get new" do
    get new_security_url
    assert_response :success
  end

  test "should create security" do
    assert_difference("Security.count") do
      post securities_url, params: { security: { casulaties: @security.casulaties, country: @security.country, description: @security.description, place: @security.place } }
    end

    assert_redirected_to security_url(Security.last)
  end

  test "should show security" do
    get security_url(@security)
    assert_response :success
  end

  test "should get edit" do
    get edit_security_url(@security)
    assert_response :success
  end

  test "should update security" do
    patch security_url(@security), params: { security: { casulaties: @security.casulaties, country: @security.country, description: @security.description, place: @security.place } }
    assert_redirected_to security_url(@security)
  end

  test "should destroy security" do
    assert_difference("Security.count", -1) do
      delete security_url(@security)
    end

    assert_redirected_to securities_url
  end
end
