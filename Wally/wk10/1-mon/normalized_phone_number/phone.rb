
class Phone

  def initialize(num)
    @num = num
  end

  def area_code
    return "#{@num[0..2]}"
  end

  def number
    str_length = @num.length
    @num = @num.sub(/^1/,'') if str_length == 11 && @num[0] == "1"

    str_length = @num.length
    @num = "0000000000" if str_length == 11 || str_length == 9
    return @num.gsub(/[^0-9]+/,"")
  end

  def to_s
    return "(#{@num[0..2]}) #{@num[3..5]}-#{@num[6..9]}"
  end

end
